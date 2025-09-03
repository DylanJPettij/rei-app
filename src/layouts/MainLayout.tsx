import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const MainLayout = () => {
  return (
    <div className="flex w-full justify-between items-center bg-blue-900 h-10 p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className="font-bold text-white" href="/home">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="font-bold text-white"
              href="/my-properties"
            >
              Mortgage Rates
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="font-bold text-white"
              href="/renovation-calculator"
            >
              Renovation Calculator
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainLayout;
