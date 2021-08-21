/** @jsx jsx */
import React from 'react'
import { Themed, jsx } from 'theme-ui'
import { GenericIcon } from './icons'
import { faFacebook, faTwitter, faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function cleanUrl(url: string, domainName: string, replacementString: string = ""): string {
  return url.replace(domainName, "").replace("www.", "").replace(/^https?:\/\//, replacementString).replace("/", "")
}

interface Props {
    facebook?: string
    twitter?: string
    instagram?: string
    spotify?: string
    youtube?: string
    email?: string
    website?: string
    phone?: string
    withTitle?: boolean
}

const EventOrArtSocialList = ({
  facebook,
  twitter,
  instagram,
  spotify,
  youtube,
  email,
  website,
  phone,
  withTitle = true,
  ...props
}: Props) => (
  <>
  {withTitle && <Themed.h3 {...props}>Social</Themed.h3>}
    <Themed.ul
    >
      {facebook && (
        <li>
          <GenericIcon
            icon={faFacebook}
            url={`https://facebook.com/${facebook}`}
            label={cleanUrl(facebook, "facebook.com/")}

          />
        </li>
      )}
      {instagram && (
        <li>
          <GenericIcon
            icon={faInstagram}
            url={`https://instagram.com/${instagram}`}
            label={cleanUrl(instagram, "instagram.com/" ,"@")}
          />
        </li>
      )}
      {email && (
        <li>
          <GenericIcon
            icon={faEnvelope}
            url={`mailto:${email}`}
            label={email}
          />
        </li>
      )}
      {twitter && (
        <li>
          <GenericIcon
            icon={faTwitter}
            url={`https://twitter.com/${twitter}`}
            label={cleanUrl(twitter, "twitter.com", "@")}
          />
        </li>
      )}
      {spotify && (
        <li>
          <GenericIcon
            icon={faSpotify}
            url={`https://open.spotify.com/user/${spotify}`}
            label={"Spotify"}
          />
        </li>
      )}
      {youtube && (
        <li>
          <GenericIcon
            icon={faYoutube}
            url={`https://www.youtube.com/user/${youtube}`}
            label={cleanUrl(youtube, "youtube.com")}
          />
        </li>
      )}
      {website && (
        <li>
          <GenericIcon
            icon={faGlobe}
            url={website}
            label={cleanUrl(website, "")}
          />
        </li>
      )}
      {phone && (
        <li>
          <GenericIcon icon={faPhone} url={`tel:${phone}`} label={phone} />
        </li>
      )}
    </Themed.ul>
  </>
);

export default EventOrArtSocialList