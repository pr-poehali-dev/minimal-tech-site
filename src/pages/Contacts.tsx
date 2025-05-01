
import React from "react";
import Navbar from "@/components/ui/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <h1 className="text-4xl font-bold tracking-tight mb-3">Контакты</h1>
              <p className="text-muted-foreground md:text-xl/relaxed max-w-[700px]">
                Свяжитесь с нами для получения подробной информации о товарах и услугах
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon name="MapPin" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Адрес</h3>
                        <p className="text-muted-foreground">
                          г.Калуга, ул. Салтыкова-Щедрина, 133А, стр.1, офис 308
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon name="Phone" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (484) 221-17-44</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon name="Mail" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-muted-foreground">zakupka@i-t-pro.ru</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon name="Clock" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Время работы</h3>
                        <p className="text-muted-foreground">
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб: 10:00 - 16:00
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Введите ваше имя" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Введите ваш email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема</Label>
                      <Input id="subject" placeholder="Введите тему сообщения" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        placeholder="Введите ваше сообщение"
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">Отправить сообщение</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Как нас найти</h2>
              <div className="border rounded-lg overflow-hidden h-[400px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.5299889135163!2d36.260308377301604!3d54.510661271999395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4134b9a40dff0d81%3A0x18f70a4a76255dfc!2z0YPQuy4g0KHQsNC70YLRi9C60L7QstCwLdCp0LXQtNGA0LjQvdCwLCAxMzPQkCDRgdGC0YDQvtC10L3QuNC1IDEsINCa0LDQu9GD0LPQsCwg0JrQsNC70YPQttGB0LrQsNGPINC-0LHQuy4sIDI0ODAyMQ!5e0!3m2!1sru!2sru!4v1714620064307!5m2!1sru!2sru"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-medium mb-2">АЙТИ ПРО</h3>
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
            © 2025 АЙТИ ПРО. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
