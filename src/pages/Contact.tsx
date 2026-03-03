// import { useState } from "react";
// import { Phone, Mail, MapPin } from "lucide-react";

// const productOptions = [
//   "Natural High Protein Buffalo Milk 500ML",
//   "Natural High Protein Buffalo Milk 1000ML",
//   "High Protein Cow Milk 500ML",
//   "High Protein Cow Milk 1000ML",
//   "Cow Milk 500ML",
//   "Cow Milk 1000ML",
//   "Buffalo Milk 500ML",
//   "Buffalo Milk 1000ML",
//   "Taaza Paneer 250gm",
//   "Taaza Paneer 500gm",
//   "Taaza Paneer 1kg",
//   "Bilona Buffalo Ghee 500ML",
//   "Bilona Buffalo Ghee 1000ML",
//   "Bilona Cow Ghee 500ML",
//   "Bilona Cow Ghee 1000ML",
//   "Farm Fresh Curd 1kg",
//   "Farm Fresh Curd 500ML",
//   "Farm Fresh Curd 250ML",
// ];

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", phone: "", product: "", message: "" });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const productLine = form.product ? `\nProduct Interest: ${form.product}` : "";
//     const msg = `Hello MilkWonders,\n\nName: ${form.name}\nPhone: ${form.phone}${productLine}\nMessage: ${form.message}`;
//     window.open(`https://wa.me/917396304599?text=${encodeURIComponent(msg)}`, "_blank");
//   };

//   return (
//     <main>
//       <section className="gradient-green py-16">
//         <div className="container mx-auto px-4 lg:px-8 text-center">
//           <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-3">Contact Us</h1>
//           <p className="text-primary-foreground/80 text-lg">Get Fresh Milk Delivered to Your Doorstep</p>
//         </div>
//       </section>

//       <section className="py-16 lg:py-24">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
//             {/* Contact Info */}
//             <div>
//               <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
//               <div className="space-y-5">
//                 <div className="flex items-start gap-4">
//                   <div className="gradient-green w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
//                     <MapPin className="h-5 w-5 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-foreground">Address</p>
//                     <p className="text-muted-foreground text-sm">Lunani Nagar, S.V.Function Hall & Kommuri Granate, Tengellamudi – Eluru, Andhra Pradesh 534005</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="gradient-green w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
//                     <Phone className="h-5 w-5 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-foreground">Phone</p>
//                     <a href="tel:7396304599" className="text-primary hover:underline">7396304599</a>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="gradient-green w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
//                     <Mail className="h-5 w-5 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-foreground">Email</p>
//                     <a href="mailto:milkwonders36@gmail.com" className="text-primary hover:underline">milkwonders36@gmail.com</a>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Follow Us</h3>
//                 <div className="space-y-2 text-sm text-muted-foreground">
//                   <p>📸 Instagram: <a href="https://instagram.com/milkwondersofficial" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@milkwondersofficial</a></p>
//                   <p>📘 Facebook: <a href="https://facebook.com/milkwondersofficial" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">milkwondersofficial</a></p>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div>
//               <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send a Message</h2>
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
//                   <input
//                     type="text"
//                     required
//                     value={form.name}
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                     className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//                     placeholder="Your name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
//                   <input
//                     type="tel"
//                     required
//                     value={form.phone}
//                     onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                     className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//                     placeholder="Your phone number"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1.5">Product Interest</label>
//                   <select
//                     value={form.product}
//                     onChange={(e) => setForm({ ...form, product: e.target.value })}
//                     className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
//                   >
//                     <option value="">Select a product (optional)</option>
//                     {productOptions.map((p) => (
//                       <option key={p} value={p}>{p}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
//                   <textarea
//                     required
//                     rows={4}
//                     value={form.message}
//                     onChange={(e) => setForm({ ...form, message: e.target.value })}
//                     className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
//                     placeholder="Your message"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full gradient-green text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
//                 >
//                   Send via WhatsApp
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;






import { useState } from "react";
import { Phone, Mail, MapPin, Banknote } from "lucide-react";

const productOptions = [
  "Natural High Protein Buffalo Milk 500ML",
  "Natural High Protein Buffalo Milk 1000ML",
  "High Protein Cow Milk 500ML",
  "High Protein Cow Milk 1000ML",
  "Cow Milk 500ML",
  "Cow Milk 1000ML",
  "Buffalo Milk 500ML",
  "Buffalo Milk 1000ML",
  "Taaza Paneer 250gm",
  "Taaza Paneer 500gm",
  "Taaza Paneer 1kg",
  "Bilona Buffalo Ghee 500ML",
  "Bilona Buffalo Ghee 1000ML",
  "Bilona Cow Ghee 500ML",
  "Bilona Cow Ghee 1000ML",
  "Farm Fresh Curd 1kg",
  "Farm Fresh Curd 500ML",
  "Farm Fresh Curd 250ML",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", product: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productLine = form.product ? `\nProduct Interest: ${form.product}` : "";
    const msg = `Hello MilkWonders,\n\nName: ${form.name}\nPhone: ${form.phone}${productLine}\nMessage: ${form.message}`;
    window.open(`https://wa.me/917396304599?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main>
      <section className="gradient-green py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-3">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg">Get Fresh Milk Delivered to Your Doorstep</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="gradient-green w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">Lunani Nagar, S.V.Function Hall & Kommuri Granate, Tengellamudi – Eluru, Andhra Pradesh 534005</p>
                  </div>
                </div>

                {/* Added Payment Information */}
                <div className="flex items-start gap-4">
                  <div className="gradient-green w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <Banknote className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Payment Options</p>
                    <p className="text-primary font-medium text-sm">Pay on Delivery (Cash/UPI) Available</p>
                    <p className="text-muted-foreground text-xs">Secure payment at your doorstep upon receiving your order.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="gradient-green w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:7396304599" className="text-primary hover:underline">7396304599</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="gradient-green w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:milkwonders36@gmail.com" className="text-primary hover:underline">milkwonders36@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Follow Us</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📸 Instagram: <a href="https://instagram.com/milkwondersofficial" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@milkwondersofficial</a></p>
                  <p>📘 Facebook: <a href="https://facebook.com/milkwondersofficial" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">milkwondersofficial</a></p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Product Interest</label>
                  <select
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a product (optional)</option>
                    {productOptions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gradient-green text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send via WhatsApp
                </button>
                <p className="text-center text-xs text-muted-foreground mt-2 italic">
                  * All orders are eligible for Pay on Delivery.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;