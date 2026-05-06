import BinanceLogo from "@/assets/svg/sponsors/BinnanceLogo";
import CtlLogo from "@/assets/svg/sponsors/CtlLogo";
import IbasLogo from "@/assets/svg/sponsors/IbasLogo";
import DekoSolutionsLogo from "@/assets/svg/sponsors/media/DekoSolutionsLogo";
import { PixelsLogo } from "@/assets/svg/PixelsLogo";
import StackedLogo from "@/assets/svg/sponsors/StackedLogo";
import TelegrafiLogo from "@/assets/svg/sponsors/TelegrafiLogo";
import Z from "@/assets/svg/sponsors/Z";
import { IckLogo } from "@/assets/svg/sponsors/IckLogo";
import { OnePixelLogo } from "@/assets/svg/sponsors/OnePixelLogo";
import { CapraCreativeLogo } from "@/assets/svg/CapraCreativeLogo";
import DukagjiniLogo from "@/assets/svg/sponsors/media/DukagjiniLogo";
import CryptoRLogo from "@/assets/svg/sponsors/CryptoRLogo";
import ScardusSigLogo from "@/assets/svg/sponsors/ScardusSigLogo";
import CryptoAlbanianLogo from "@/assets/svg/sponsors/CryptoAlbanianLogo";


export const sponsorsMock = {
    titleSponsors: [
        {
            sponsor_id: 1,
            sponsor_linkUrl: "https://www.binance.com/en",
            sponsor_logo: <BinanceLogo />,
        },
    ],
    sliverSponsors: [
        {
            sponsor_id: 2,
            sponsor_linkUrl: "#",
            sponsor_logo: <Z />,
            image_sponsor: true,
        },
    ],
    diamondSponsors: [

    ],
    goldSponsors: [
    ],

    platinumSponsors: [
        {
            sponsor_id: 3,
            sponsor_linkUrl: "https://www.pixels.xyz/",
            sponsor_logo: <PixelsLogo />,
            image_sponsor: false,
        },
        {
            sponsor_id: 4,
            sponsor_linkUrl: "https://www.pixels.xyz/",
            sponsor_logo: <StackedLogo />,
            // sponsor_logo: <PixelsLogo/>,
            image_sponsor: false,
        },
    ],
    visualSponsors: [

    ],
    communitySponsors: [
        {
            sponsor_id: 5,
            sponsor_linkUrl: "https://ickosovo.com/",
            sponsor_logo: <IckLogo />,
            image_sponsor: false,
        },
    ],
    mediaSponsors: [
        {
            sponsor_id: 6,
            sponsor_linkUrl: "https://www.instagram.com/one.pixel.official/",
            sponsor_logo: <OnePixelLogo />,
            image_sponsor: false,
        },
        {
            sponsor_id: 7,
            sponsor_linkUrl: "https://telegrafi.com/",
            sponsor_logo: <TelegrafiLogo />,
            image_sponsor: false,
        },
        {
            sponsor_id: 8,
            sponsor_linkUrl: "https://www.dukagjini.com/",
            sponsor_logo: <DukagjiniLogo />,
            image_sponsor: false,
        },
        {
            sponsor_id: 10,
            sponsor_linkUrl: "https://www.capra-creative.com/",
            sponsor_logo: <CapraCreativeLogo />,
            image_sponsor: false,
        },
    ],
    communityAndMediaSponsors: [
            {
                sponsor_id: 6,
                sponsor_linkUrl: "https://www.instagram.com/one.pixel.official/",
                sponsor_logo: <OnePixelLogo />,
                image_sponsor: false,
            },
            {
                sponsor_id: 7,
                sponsor_linkUrl: "https://telegrafi.com/",
                sponsor_logo: <TelegrafiLogo />,
                image_sponsor: false,
            },
            {
                sponsor_id: 8,
                sponsor_linkUrl: "https://www.dukagjini.com/",
                sponsor_logo: <DukagjiniLogo />,
                image_sponsor: false,
            },
            {
                sponsor_id: 10,
                sponsor_linkUrl: "https://www.capra-creative.com/",
                sponsor_logo: <CapraCreativeLogo />,
                image_sponsor: false,
            },
            {
                sponsor_id: 11,
                sponsor_linkUrl: "https://ickosovo.com/",
                sponsor_logo: <IckLogo />,
                image_sponsor: false,
             //   sponsor_hidden: true,
            },
            {
                sponsor_id: 12,
                sponsor_linkUrl: "https://x.com/revolut20",
                image: "/images/crypto-r.png",
                image_sponsor: true,
             //   sponsor_hidden: true,
            },
            {
                sponsor_id: 11,
                sponsor_linkUrl: "https://scardusig.com/",
                sponsor_logo: <ScardusSigLogo/>,
                image_sponsor: false,
             //   sponsor_hidden: true,
            },
            {
                sponsor_id: 12,
                sponsor_linkUrl: "https://www.instagram.com/cryptolbanians/",
                sponsor_logo: <CryptoAlbanianLogo/>,
                image_sponsor: false,
             //   sponsor_hidden: true,
            },
    ]
}