import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import imagebg from "../../../public/images/digital-increasing-bar-graph-with-businessman-hand-overlay.jpg";
import { getServices } from "@/server/db/services";

export default async  function ServicesPage() {
    const services = await getServices();
  
  return (
    <div className="bg-gray-50 mt-14">
      {/* Hero Section with Background Image */}
      <section className="relative h-96 w-full">
        <Image
          src={imagebg}
          alt="خدماتنا"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">حلولنا المتكاملة</h1>
            <p className="text-xl max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات الهندسية التي تلبي جميع احتياجاتك بدقة واحترافية
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            اكتشف خدماتنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            حلول مصممة خصيصًا لتحقيق أهدافك بمستوى عالي من الجودة والدقة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden group hover:shadow-lg transition-all">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={service.image ?? ""}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>

            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">مستعد لبدء مشروعك؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            تواصل مع فريقنا اليوم للحصول على استشارة مجانية وتقييم احتياجاتك
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
              تواصل معنا الآن
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Process Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            كيف نعمل
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-400 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "الاستشارة", desc: "نستمع لمتطلباتك ونحللها" },
            { title: "التخطيط", desc: "نضع خطة عمل مفصلة" },
            { title: "التنفيذ", desc: "ننفذ المشروع بدقة" },
            { title: "التسليم", desc: "نسلم المشروع بجودة عالية" },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata(){
  return(
    {
      title: "ArtX - خدماتنا",
      description: "نحن نقدم خدمات مصممة خصيصًا لتحقيق استراتيجية تميز واحتياجاتك",
      alternates: {
        canonical: "https://artx.sa/services",
      }
    }
  )
}