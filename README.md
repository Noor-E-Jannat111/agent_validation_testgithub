Agent Validation – Identity Core Test
কনটেক্সট:
আপনি একজন Security Systems Developer 
আপনার কাজ হলো আন্তর্জাতিক স্পাই নেটওয়ার্কে নতুন এজেন্টদের প্রোফাইল যাচাই করা।
প্রোফাইলগুলোতে থাকে তাদের Core Identity Number (CIN)।
শর্ত:
প্রতিটি বৈধ এজেন্টের CIN অবশ্যই এমন হতে হবে,
❗ "It has no dependency except its origin and itself."
❗ "The CIN must not reveal a combinable or reducible identity footprint."
আপনার সিস্টেমে এখন একটি CIN এসেছে, আপনি যাচাই করবেন সেটা valid identity কিনা।

ইনপুট (JavaScript):
const CIN = 91;

টাস্ক:
একটি ফাংশন লিখুন validateIdentity(CIN)
যা চেক করবে, CIN বৈধ কিনা identity system অনুযায়ী।

আউটপুট:
Agent Approved: Identity pattern is untraceable.
বা
Rejected: Identity pattern shows external links.
