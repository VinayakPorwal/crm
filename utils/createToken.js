const generateOTP = function () {
  let OTP = "";
  for (let i = 0; i < 5; i++) {
    OTP += Math.floor(Math.random() * 10);
  }
  return OTP;
};

module.exports = { generateOTP };
