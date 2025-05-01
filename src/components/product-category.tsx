
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface ProductCategoryProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ProductCategory = ({ title, description, icon, link }: ProductCategoryProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-primary/10 p-4">
          <Icon name={icon} size={32} className="text-primary" />
        </div>
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription className="mb-4">{description}</CardDescription>
        <Button asChild className="mt-auto w-full">
          <Link to={link}>
            Перейти
            <Icon name="ArrowRight" size={16} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCategory;
