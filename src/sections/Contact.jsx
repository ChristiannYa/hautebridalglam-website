import contact from '../assets/icons/contact';
import miscellaneous from '../assets/miscellaneous';

const contactInfo = [
  {
    icon: contact.mail,
    text: 'hbgbya.j@gmail.com',
  },
  {
    icon: contact.phone,
    text: '(214) 499-2106',
  },
  {
    icon: contact.instagram,
    text: '@hautebridalglam',
  },
  {
    icon: contact.location,
    text: 'Dallas | Plano | Frisco | Allen, TX',
  },
];

const Contact = () => {
  return (
    <footer className="bg-white text-black py-10 max-md:py-6">
      <div className="screen1600 flexrow-center font-hostGrotesk">
        <div className="flex-1 space-y-2">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-x-2">
              <img
                className="max-md:w-3.5 max-md:h-3.5"
                src={item.icon}
                alt=""
                width={18}
                height={18}
              />
              <p className="max-[460px]:text-xs max-lg:text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flexcol-center">
          <div className="overflow-hidden w-fit">
            <img
              src={miscellaneous.logoBlack}
              alt="Logo"
              className="h-12 p-1"
            />
          </div>
          <div className="text-center">
            <p className="max-[460px]:text-xs max-lg:text-sm">
              HBG @2025 <br className="min-[490px]:hidden" /> All Rights
              Reseerved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
