import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className='flex flex-col'>
            <div className='flex flex-grow justify-evenly max-w-2xl rounded-'>
                <HeaderItem
                title='HOME'
                Icon={HomeIcon}/>
                <HeaderItem
                title='TRENDING'
                Icon={LightningBoltIcon}/>
                <HeaderItem
                title='VERIFIED'
                Icon={BadgeCheckIcon}/>
                <HeaderItem
                title='COLLECTIONS'
                Icon={CollectionIcon}/>
                <HeaderItem
                title='Search'
                Icon={SearchIcon}/>
                <HeaderItem
                title='ACCOUNT'
                Icon={UserIcon}/>
            </div>

            <Image
            className="object-contain"
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
            alt="hulu logo"/>
        </header>
    )
}

export default Header

