import { ArtButton } from "@/shared/ui/ArtButton"
import { Title } from "@/shared/ui/Title"
import Link from "next/link"
import cl from 'classnames';
import stylesNew from '@/styles/home.module.scss';

const FirstLayout = () => {
    return (
        <div className={cl(stylesNew.section)}>
          <Title>
            From dust to&nbsp;dawn
          </Title>
          <ul className={stylesNew.buttonList}>
            <li>
              <Link href="/mint">
                <ArtButton onClick={() => {}}>
                  Mint
                </ArtButton>
              </Link>
            </li>
            <li>
            <ArtButton onClick={() => {}}>
              Whitepaper
            </ArtButton>
            </li>
          </ul>
        </div>
   )
}

export default FirstLayout
