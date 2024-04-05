function ContactImg() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/images/writer.png"
        className=""
        alt="contact page image"
        style={{
          width: "80%",
          height: "80%",
          maxHeight: "90%",
          maxWidth: "90%",
        }}
      />
    </div>
  );
}

export default ContactImg;
