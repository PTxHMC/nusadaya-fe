'use client';

import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  User
} from '@nextui-org/react';
import { MenuItems } from '@/datas/menu';
import { useAuthLogout, useGetAccessToken } from '@/features/Auth/hooks';
import { jwtUserDecode } from '@/types/auth';
import { jwtDecode } from 'jwt-decode';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: token, isSuccess } = useGetAccessToken();
  const [userData, setUserData] = useState<jwtUserDecode>();
  useEffect(() => {
    if (isSuccess) {
      const decoded: jwtUserDecode = jwtDecode(token.access_token);
      setUserData(decoded);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const { mutate: logout } = useAuthLogout();

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      isBordered
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
            className="w-full text-2xl font-bold text-primary-text"
          >
            Nusadaya
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {MenuItems.map(({ id, title }) => (
          <NavbarItem key={id}>
            <Link
              as={NextLink}
              color="foreground"
              href={`/#${title}`}
              className="text-primary-text"
            >
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {token ? (
            <Dropdown>
              <DropdownTrigger>
                <User
                  name={userData?.username}
                  avatarProps={{
                    name: userData?.username
                  }}
                  className="cursor-pointer"
                />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  color="danger"
                  key="logout"
                  onClick={() => logout()}
                  className="text-danger"
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button
              as={Link}
              href="/sign-up"
              variant="bordered"
              className="border-gray-700 text-primary-text"
            >
              Daftar
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {MenuItems.map(({ id, title }) => (
          <NavbarMenuItem key={id}>
            <Link
              as={NextLink}
              color="foreground"
              className="w-full text-primary-text"
              href={`/#${title}`}
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
