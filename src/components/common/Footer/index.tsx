import type { ReactElement } from 'react'
import { SvgIcon } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import LanguageIcon from '@mui/icons-material/Language'
import FileOpenIcon from '@mui/icons-material/FileOpen'
import DiscordIcon from '@/public/images/common/discord-icon-new.svg'

import { useRouter } from 'next/router'
import css from './styles.module.css'
import { AppRoutes } from '@/config/routes'
import packageJson from '../../../../package.json'
import ExternalLink from '../ExternalLink'

const footerPages = [AppRoutes.welcome.index, AppRoutes.settings.index, AppRoutes.imprint, AppRoutes.cookie]

const Footer = (): ReactElement | null => {
  const router = useRouter()

  if (!footerPages.some((path) => router.pathname.startsWith(path))) {
    return null
  }

  return (
    <footer className={css.container}>
      <ul>
        <li>
          <ExternalLink href="https://www.zircuit.com/" noIcon>
            <SvgIcon component={LanguageIcon} inheritViewBox fontSize="inherit" sx={{ mr: 0.5 }} /> Website
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://x.com/ZircuitL2" noIcon>
            <SvgIcon component={XIcon} inheritViewBox fontSize="inherit" sx={{ mr: 0.5 }} /> ZircuitL2
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://discord.com/invite/zircuit" noIcon>
            <SvgIcon component={DiscordIcon} inheritViewBox fontSize="inherit" sx={{ mr: 0.5 }} /> Discord
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://dubiw3zgo51jg.cloudfront.net/tos.pdf" noIcon>
            <SvgIcon component={FileOpenIcon} inheritViewBox fontSize="inherit" sx={{ mr: 0.5 }} /> Terms Of Service
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://dubiw3zgo51jg.cloudfront.net/pp.pdf" noIcon>
            <SvgIcon component={FileOpenIcon} inheritViewBox fontSize="inherit" sx={{ mr: 0.5 }} /> Privacy Policy
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={`${packageJson.homepage}/releases/tag/v${packageJson.version}`} noIcon>
            <SvgIcon component={GitHubIcon} inheritViewBox fontSize="inherit" sx={{ mr: 0.5 }} /> v{packageJson.version}
          </ExternalLink>
        </li>
        <li>
          Deployed by&nbsp;
          <ExternalLink href={'https://protofire.io/services/safe-deployment'} noIcon>
            Protofire
          </ExternalLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
