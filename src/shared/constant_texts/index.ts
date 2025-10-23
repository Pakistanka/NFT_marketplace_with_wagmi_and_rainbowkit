export const STATUS_MESSAGES = {
  mintSuccess: (hash: string | undefined | any) => `Mint successful! \nTransaction Hash: ${hash}`,
  confirming: (hash: string | undefined | any) => `Waiting for confirmation \nTransaction Hash: ${hash}`,
  pending: 'Waiting for wallet signature...',
  failed: (hash: string | undefined | any) =>
    `Transaction sent, but confirmation failed or timed out. \nTransaction Hash: ${hash}`,

  walletNotConnected: 'Please connect your wallet to mint.',
  invalidRecipient: 'Invalid recipient address.',
  noImageFile: 'Please select an image file to mint.',
};
