import contact from '../assets/icons/contact';
import miscellaneous from '../assets/miscellaneous';

const Contact = () => {
  return (
    <footer className="bg-white text-black py-10 max-md:py-6">
      <div className="screen1600 flex justify-between items-center font-outfit">
        <div className="flex-1 max-md:hidden"></div>{' '}
        {/* Empty div for spacing */}
        <div className="overflow-hidden w-fit mb-2 mx-auto">
          <img src={miscellaneous.logoBlack} alt="Logo" className="h-12 p-1" />
        </div>
        {/* Empty div for spacing */}
        <div className="flex-1 space-y-2 text-right">
          <div className="flex justify-end items-center gap-x-2">
            <p>info@bridalbeautyartistry.com</p>
            <img src={contact.mail} alt="" width={18} height={18} />
          </div>
          <div className="flex justify-end items-center gap-x-2">
            <p>(214) 499-2106</p>
            <img src={contact.phone} alt="" width={18} height={18} />
          </div>
          <div className="flex justify-end items-center gap-x-2">
            <p>@arithebridal</p>
            <img src={contact.instagram} alt="" width={18} height={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
