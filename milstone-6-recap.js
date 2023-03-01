/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।
 */

const diploma = {
  instituteName: "Jashore polytechnic Institute",
  technicalLabs: {
    networkingLab: "Computer Department",
    softwareLab: "Computer Department",
  },
  departmentName: [
    "computer",
    "civil",
    "telecommunication",
    "power",
    "electronics",
  ],
  returnSomething() {
    return this.technicalLabs.networkingLab;
  },
};

const result = diploma.returnSomething();
console.log(result);

/* ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।
 */

const showDiplomaDetails = `
My institute Name is ${diploma.instituteName}. I read in ${diploma.technicalLabs.softwareLab}. In our Institute The department of ${diploma.departmentName[1]} students are very Active in curriculum Activities.
`;
console.log(showDiplomaDetails);

/* ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।  */

const ZeroParameter = () => 89;
console.log(ZeroParameter());
/* ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।
 */
const divide = (num) => num / 17; //2
console.log(divide(34));

/* ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।
 */
const addThenDevide = (num1, num2) => (num1 + num2) / 2; //2
console.log(addThenDevide(2, 2));

/* ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
 */
const addMultipleParamiter = (num1, num2) => {
  return num1 + 7 + (num2 + 7);
};
console.log(addMultipleParamiter(1, 2)); //17

/* ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
 */
const numbers = [21, 14, 52, 62, 12, 32, 52, 85];
const dividedBySeven = numbers.map((num) => num / 7);
console.log(dividedBySeven);

/* ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 


1. map array er protita elemnt er upor oparetion aply kore array er elemet ke onno ekta notun array te return kore

2. forEach map er motoi kaj kore kintu kichui return kore na

3. filter array er element gularke sorto sapekkhe khuje ber kore ekta notun array return kore.

4. Find filter er motoi kaj kore kintu ekta ekta matro element peye gelei return kore dei eta element return kore jekhane filter rkta array return kore
*/


