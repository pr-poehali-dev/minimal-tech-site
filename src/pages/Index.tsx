
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/hero-section";
import ProductCategory from "@/components/product-category";

const Index = () => {
  const categories = [
    {
      title: "Компьютеры и ноутбуки",
      description: "Современные решения для любых задач",
      icon: "Laptop",
      link: "/catalog/computers"
    },
    {
      title: "Серверное оборудование",
      description: "Надежные серверы для вашего бизнеса",
      icon: "Server",
      link: "/catalog/servers"
    },
    {
      title: "Оргтехника",
      description: "Принтеры, сканеры и МФУ",
      icon: "Printer",
      link: "/catalog/office"
    },
    {
      title: "Торговое оборудование",
      description: "Кассы, терминалы, сканеры штрих-кодов",
      icon: "ShoppingBag",
      link: "/catalog/pos"
    },
    {
      title: "Видеонаблюдение",
      description: "Камеры и системы безопасности",
      icon: "Camera",
      link: "/catalog/security"
    },
    {
      title: "Расходные материалы",
      description: "Картриджи, тонеры, кабели и аксессуары",
      icon: "Package",
      link: "/catalog/supplies"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Наши категории товаров</h2>
              <p className="text-muted-foreground md:text-xl/relaxed max-w-[700px]">
                Выберите категорию, чтобы найти необходимое оборудование для вашего бизнеса
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <ProductCategory 
                  key={index}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  link={category.link}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Почему выбирают нас</h2>
              <p className="text-muted-foreground md:text-xl/relaxed max-w-[700px]">
                Мы предлагаем только проверенные решения и качественное оборудование
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <span className="text-primary text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">Официальная гарантия от производителя на всю технику</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <span className="text-primary text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                <p className="text-muted-foreground">Оперативная доставка по всей России</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <span className="text-primary text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Техническая поддержка</h3>
                <p className="text-muted-foreground">Консультации и помощь в настройке оборудования</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-medium mb-2">ТехноМир</h3>
              <p className="text-sm text-muted-foreground">Техника для вашего бизнеса от ведущих производителей.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Контакты</h3>
              <p className="text-sm text-muted-foreground">
                Телефон: +7 (484) 221-17-44<br />
                Email: zakupka@i-t-pro.ru
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Адрес</h3>
              <p className="text-sm text-muted-foreground">
                г.Калуга, ул. Салтыкова-Щедрина, 133А, стр.1, офис 308
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Время работы</h3>
              <p className="text-sm text-muted-foreground">
                Пн-Пт: 9:00 - 18:00<br />
                Сб: 10:00 - 16:00
              </p>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © 2025 ТехноМир. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
