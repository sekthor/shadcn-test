"use client"
import { 
    NavigationMenu, 
    NavigationMenuContent, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuList, 
    NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Navbar = () => {
    
    return (
    <>
    <img src="sfdg" alt="" />
    <nav>
        <NavigationMenu>
            <NavigationMenuList>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Club</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul>
                            <li>
                                <NavigationMenuLink>History</NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink>History</NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>

                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>News</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    </nav>
    </>
    )
}

export default Navbar;