const Contact = () => {
  return (
    <div>
      <h1>hey here i will write my contact so that you can reach out to me</h1>
      <input
        type="text"
        className="border border-black mx-4 p-2 rounded-lg"
        placeholder="Name"
      />
      <input
        type="text"
        className="border border-black mx-4 p-2 rounded-lg"
        placeholder="Message"
      />
      <button className="bg-orange-700 p-2 rounded-lg text-white mt-4">
        Submit
      </button>
    </div>
  );
};

export default Contact;
