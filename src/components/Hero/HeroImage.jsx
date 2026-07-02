import profile from "../../assets/images/profile/ashir.png";

function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        <div className="absolute inset-0 bg-purple-600 blur-[120px] opacity-30 rounded-full" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500 blur-[100px] opacity-20 rounded-full" />
        <img
          src={profile}
          alt="Muhammad Ashir"
          className="relative z-10 w-[320px] md:w-[420px] lg:w-[500px] rounded-[30px] object-cover"
        />
      </div>
    </div>
  );
}

export default HeroImage;
