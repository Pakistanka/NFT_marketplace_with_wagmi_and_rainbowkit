import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Header from "@/widgets/Header";
import { ArtTitle } from "@/shared/ui/ArtTitle";
import { ArtButton } from "@/shared/ui/ArtButton";
import { Text } from "@/shared/ui/Text";

import styles from '@/styles/mint.module.scss';
import cl from 'classnames';

import { useWriteContract, useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { isAddress } from 'viem';
import { abi } from "smart_contract/abi";
import { STATUS_MESSAGES } from "@/shared/constant_texts";


const uploadFileAndGenerateURI = async (file: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockHash = `QmW${file.name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 10)}`;
    return `ipfs://${mockHash}/metadata.json`;
};

const Mint = () => {
    const CONTRACT_ADDRESS = '0x139A9201c545E49Ec10BbEdC9abBCdfeb0c723EA';

    const { address, isConnected } = useAccount();
    const { data: hash, isPending, writeContract } = useWriteContract();

    const [recipient, setRecipient] = useState(address || '');
    const [statusMessage, setStatusMessage] = useState('');

    const [imageFile, setImageFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [finalTokenURI, setFinalTokenURI] = useState('');
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({ hash });

    useEffect(() => {
        if (address && !recipient) {
            setRecipient(address);
        }
    }, [address, recipient]);

    const handleFileChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
            setStatusMessage(`File selected: ${e.target.files[0].name}`);
        } else {
            setImageFile(null);
            setStatusMessage('');
        }
    };

    const handleMint = async (e: any) => {
        e.preventDefault();

        if (!isConnected) {
        setStatusMessage(STATUS_MESSAGES.walletNotConnected);
        return;
        }

        if (!isAddress(recipient)) {
        setStatusMessage(STATUS_MESSAGES.invalidRecipient);
        return;
        }

        if (!imageFile) {
        setStatusMessage(STATUS_MESSAGES.noImageFile);
        return;
        }

        setIsUploading(true);
        setStatusMessage('1/2: Uploading image and generating metadata...');

        try {
            const uri = await uploadFileAndGenerateURI(imageFile);
            setFinalTokenURI(uri);
            setStatusMessage(`2/2: Metadata URI created. Signing transaction...`);

            writeContract({
                address: CONTRACT_ADDRESS,
                abi: abi,
                functionName: 'safeMint',
                args: [recipient, uri],
            });

        } catch (error) {
            console.error("Upload failed:", error);
            setStatusMessage(`Error during upload: ${error instanceof Error ? error.message : String(error)}`);
        } finally {
            setIsUploading(false);
        }
    };

    useEffect(() => {
        if (isConfirmed) {
            setStatusMessage(STATUS_MESSAGES.mintSuccess(hash));
            setFinalTokenURI('');
            setImageFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } else if (isConfirming) {
            setStatusMessage(STATUS_MESSAGES.confirming(hash));
        } else if (isPending) {
            setStatusMessage(STATUS_MESSAGES.pending);
        } else if (hash && !isConfirmed) {
            setStatusMessage(STATUS_MESSAGES.failed(hash));
        }
    }, [isConfirmed, isConfirming, isPending, hash]);

    const isFormDisabled = isPending || isConfirming || isUploading;

    return (
        <div>

            <Header />
            <div className={styles.mintWrap}>
                <ArtTitle
                    type="up"
                >
                    NFT MINTING
                </ArtTitle>

                <div className={styles.mainContent}>
                    <form onSubmit={handleMint} className={styles.mintForm}>

                        <div
                            className={cl(
                                styles.animatedMenuItem,
                            )}
                        >
                            <div className={styles.animatedMenuItemContent}>
                                <label htmlFor="imageFile" className={styles.animatedMenuItemTitle}>NFT Image (.png, .jpg)</label>
                                <input
                                    id="imageFile"
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    disabled={isFormDisabled}
                                    className={cl(styles.input, styles.input_download)}
                                />
                            </div>

                            <div className={styles.animatedMenuItemContent}>
                                <label htmlFor="recipient" className={styles.animatedMenuItemTitle}>Recipient Address</label>
                                <input
                                    id="recipient"
                                    type="text"
                                    value={recipient}
                                    onChange={(e) => setRecipient(e.target.value)}
                                    disabled={true}
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.animatedMenuItemContent}>
                                <label htmlFor="tokenURI" className={styles.animatedMenuItemTitle}>Generated Token URI</label>
                                <input
                                    id="tokenURI"
                                    type="text"
                                    value={finalTokenURI || 'Automatically generated after image upload...'}
                                    disabled={true}
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <ArtButton
                            className={styles.mintButton}
                            disabled={isFormDisabled || !isConnected || !imageFile}
                        >
                            {isUploading ? 'Uploading to IPFS...' :
                             isPending ? 'Confirm in Wallet...' :
                             isConfirming ? 'Minting...' :
                             'Mint Custom NFT'}
                        </ArtButton>

                        {statusMessage && (
                            <Text className={styles.statusMessage}>{statusMessage}</Text>
                        )}

                    </form>
                </div>

                <Link href="/">
                    <ArtButton>
                        Back to Home
                    </ArtButton>
                </Link>
            </div>


        </div>
    )
}
export default Mint;
