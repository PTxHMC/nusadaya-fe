import { useState } from 'react';
import NextLink from 'next/link';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import { MenuItems } from '@/datas/menu';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="absolute top-0 bg-transparent backdrop-blur-none"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link
            as={NextLink}
            color="foreground"
            href="/"
            className="w-full text-2xl font-bold"
          >
            Nusadaya
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {MenuItems.map(({ id, title }) => (
          <NavbarItem key={id}>
            <Link as={NextLink} color="foreground" href={`#${title}`}>
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/sign-up"
            variant="bordered"
            className="border-gray-700"
          >
            Daftar
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {MenuItems.map(({ id, title }) => (
          <NavbarMenuItem key={id}>
            <Link
              as={NextLink}
              color="foreground"
              className="w-full"
              href={`#${title}`}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
