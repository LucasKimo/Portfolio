import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "eunsukim1180@gmail.com",
      link: "mailto:eunsukim1180@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+61 423 518 990",
      link: "tel:+61423518990",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Brisbane, Australia",
      link: "https://www.google.com/maps/place/Brisbane+QLD/@-27.4647838,152.9947037,13.43z/data=!4m6!3m5!1s0x6b91579aac93d233:0x402a35af3deaf40!8m2!3d-27.4704528!4d153.0260341!16zL20vMDFiOGpq?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 select-none">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto select-none">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </Card>
            ))}
          </div> */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              // info.link가 있을 경우 카드 전체를 링크로 만듭니다.
              <a 
                key={index} 
                href={info.link} 
                target={info.title === "Location" ? "_blank" : undefined}
                rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                className="block group" // 카드 전체에 그룹 효과 적용
              >
                <Card className="p-6 text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 hover:border-blue-500">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <info.icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-blue-600 transition-colors">{info.title}</h3>
                  <p className="text-gray-600 select-none">
                    {info.value}
                  </p>
                </Card>
              </a>
            ))}
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}