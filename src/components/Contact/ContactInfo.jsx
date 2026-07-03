import { contactInfo } from "../../data/contact";

function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
              <Icon />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-white hover:text-violet-400 transition">
                  {item.value}
                </a>
              ) : (
                <p className="text-white">{item.value}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactInfo;
