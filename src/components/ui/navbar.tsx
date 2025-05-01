
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">

          <Icon name="Monitor" className="h-6 w-6" />
          <span>АЙТИ ПРО</span>

        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-sm font-medium hover:underline">
            Главная
          </Link>
          <Link to="/catalog" className="text-sm font-medium hover:underline">
            Каталог
          </Link>
          <Link to="/about" className="text-sm font-medium hover:underline">
            О нас
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:underline">
            Контакты
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Icon name="Search" className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="ShoppingCart" className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
