import Breadcrumbs from "@/components /Breadcrumbs";
import BookAppointment from "@/components /contact/BookAppointment";
import ContactUs from "@/components /contact/ContactUs";

const Contact = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Breadcrumbs title="Contact Us" />
      <BookAppointment />
      <ContactUs />
    </div>
  );
};

export default Contact;
