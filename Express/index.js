// Cookies:- it is small pieces of data stored in the broswer by a website. It help to remember information about a user Http requests.

// 1.document.cookies
// :- It is a js property used to read to set cookies for a current website in the broswer.
// console.log(document.cookie);  // It returns a empty string:- ''


// It stores the info in the key- value pair, but to understand it  we have to view with cookies section in Application tab.
// Example:-
// document.cookie='name=Anshu'
// in the cookies section there would be multiple section part.
// 1. Name:- The name/key used to identify a cookie.
// 2. Value:- The data stored in that cookie.
// 3. Domian:- Specifies which host or domain can receive the cookie.It can be a domain like example.com.
// 4. path:-Specifies which URL paths can receive the cookie, e.g. /, /profile.
// 5. Expries/ Max-Age:- When it info will be vanished.
// => case1:-  document.cookie = "user=Anshu; expires=Sun, 18 Oct 2026 10:00:00 GMT; path=/";
// it is expires at 18 oct 2026 on 10 A.M
// => case2:-  document.cookie = "user=Anshu; max-age=3600; path=/";  
// it specifies how long after it will expirses.
// => case3:-  If Max-age and exprises are not aviable in the cookie, so
// :- It value bydefualt will be send "session"
// Why is it "session"?
// A Session Word refers to a time of activity until the activity won't be completed.
// When we open the website (it is a activity at time), this activity won't be closed until we completed :- we can see it as  session. 
// 6. size:- In the bytes.


// to read the document
// Egample:-
// document.cookie='name=Anshu'
// document.cookie='age=134'

// console.log(document.cookie);  // returns :- name=Anshu; user=Anshu; age=134

// // But why name=Anshu; 2 times because it will vanished when the session will be end , once you intislized it because they are stored in broswer . how to remove them?
// document.cookie = 'name=Anshu; max-age=0; path=/';

// console.log(document.cookie);

// 🚩 Important Cookie Flags
// 🔒 Secure
// Cookie sirf HTTPS par hi kaam karegi
// HTTP par send nahi hogi, why it is working on localhost becauuse there broswer knows it is runnin in the pc of devolper.
