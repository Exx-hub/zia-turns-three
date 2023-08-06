// eslint-disable-next-line react/prop-types
function Map({ screenHeight }) {
  return (
    <div className="mt-5">
      <div className=" text-base text-center mb-3">
        <h2>August 26 Saturday, 3PM</h2>

        <h2>Mcdonalds Circumferential Antipolo</h2>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.324956782372!2d121.16933007598357!3d14.580550177565504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c0aad0ae0247%3A0x9943eb4a4e7ff266!2sMcDonald&#39;s%20Unciano!5e0!3m2!1sen!2sph!4v1691301657189!5m2!1sen!2sph"
        height={screenHeight < 700 ? "150" : screenHeight > 790 ? "250" : "180"}
        style={{ width: "100%" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
