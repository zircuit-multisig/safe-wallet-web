import type { ReactElement, ReactNode } from 'react'
import { SvgIcon, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from 'next/link'
import { useRouter } from 'next/router'
import css from './styles.module.css'
import { AppRoutes } from '@/config/routes'
import packageJson from '../../../../package.json'
import ExternalLink from '../ExternalLink'
import MUILink from '@mui/material/Link'
import { HELP_CENTER_URL } from '@/config/constants'
import XIcon from '@mui/icons-material/X'
import LanguageIcon from '@mui/icons-material/Language'
import FileOpenIcon from '@mui/icons-material/FileOpen'
import DiscordIcon from '@/public/images/common/discord-icon-new.svg'
import ProtofireLogo from '@/public/images/protofire-logo.svg'
import darkPalette from '@/components/theme/darkPalette'

const footerPages = [AppRoutes.welcome.index, AppRoutes.settings.index, AppRoutes.imprint, AppRoutes.cookie]

const FooterLink = ({ children, href }: { children: ReactNode; href: string }): ReactElement => {
  return href ? (
    <Link href={href} passHref legacyBehavior>
      <MUILink>{children}</MUILink>
    </Link>
  ) : (
    <MUILink>{children}</MUILink>
  )
}

const Footer = (): ReactElement | null => {
  const router = useRouter()

  if (!footerPages.some((path) => router.pathname.startsWith(path))) {
    return null
  }

  const getHref = (path: string): string => {
    return router.pathname === path ? '' : path
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
          <FooterLink href={getHref(AppRoutes.cookie)}>Cookie policy</FooterLink>
        </li>
        <li>
          <ExternalLink href={HELP_CENTER_URL} noIcon sx={{ span: { textDecoration: 'underline' } }}>
            Help
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={`${packageJson.homepage}/releases/tag/v${packageJson.version}`} noIcon>
            <SvgIcon component={GitHubIcon} inheritViewBox fontSize="inherit" sx={{ mr: 0.5 }} /> v{packageJson.version}
          </ExternalLink>
        </li>
        <li>
          <Typography variant="caption">
            Supported by{' '}
            <SvgIcon
              component={ProtofireLogo}
              inheritViewBox
              fontSize="small"
              sx={{ verticalAlign: 'middle', mx: 0.5 }}
            />
            <Link href="https://protofire.io" sx={{ color: darkPalette.primary.main, textDecoration: 'none' }}>
              Protofire
            </Link>
          </Typography>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
