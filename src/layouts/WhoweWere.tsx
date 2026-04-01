export default function WhoweWere() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 text-center">
      {/* Gradient Heading */}
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-linear-to-r from-blue-700 to-blue-100 bg-clip-text text-transparent font-bold py-5">
        WHO WE ARE
      </h1>

      {/* Responsive Paragraph */}
      <h4 className="text-[13px] sm:text-[14px] md:text-base lg:text-[15px] pb-12 font-sans leading-relaxed">
        Rise Motive operates through three integrated clusters. Each cluster is
        built <br />
        to solve real-life problems today while preparing for the future.
      </h4>
    </div>
  );
}
