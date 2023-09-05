import { useEffect, useState } from 'react';

function PopUp5(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChildElementClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    props.closePopUp();
  };

  return (
    <>
      <div className="fixed flex flex-col">
        <div className="bg-[#CC313D] w-[415px] h-[66px] text-[25px] flex items-center justify-center text-white font-bold text-center">
          SUBMIT
        </div>
        <div
          className="bg-[#D9D9D9] flex-grow w-[415px] h-full"
          onClick={(e) => handleChildElementClick(e)}
        >
          <div className="flex flex-col items-center mt-8">
            <form onSubmit={handleSubmit} className="w-2/3">
              <div className="mb-4">
                <label htmlFor="firstName" className="text-[#CC313D] text-lg font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-[#CC313D]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="text-[#CC313D] text-lg font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-[#CC313D]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="text-[#CC313D] text-lg font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-[#CC313D]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-[#CC313D] text-lg font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-[#CC313D]"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#CC313D] text-white font-semibold rounded-lg shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div onClick={() => props.closePopUp()}></div>
    </>
  );
}

export default PopUp5;
