
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              АЙТИ ПРО — надежная техника для вашего бизнеса
            </h1>

            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Широкий ассортимент компьютеров, серверов, оргтехники и торгового оборудования от ведущих производителей.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link to="/catalog">
                  Смотреть каталог
                  <Icon name="ChevronRight" size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contacts">
                  Связаться с нами
                </Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Современная техника"
              className="rounded-lg object-cover aspect-video overflow-hidden"
              width={550}
              height={310}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
