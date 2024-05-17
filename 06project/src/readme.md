useCallback():
useCallback() is utilized here to memoize the passwordGenerator function. This function generates a random password based on certain criteria such as length, whether numbers are allowed, and whether special characters are allowed. By memoizing this function using useCallback(), React ensures that the function is only recreated if any of its dependencies (length, numAllowed, charAllowed, setPass) change and *returns a memorized function*. 
This prevents unnecessary recreations of the function, optimizing performance.
This optimization is useful when passwordGenerator is passed as a dependency to other hooks or components, preventing unnecessary re-renders.         
useEffect():

useEffect() is employed to execute the passwordGenerator function as a side effect. The useEffect() hook is configured to run after every render if any of its dependencies (length, numAllowed, charAllowed, setPass) have changed. Therefore, whenever any of these settings change, the passwordGenerator function is called within the useEffect(), ensuring that the password is regenerated with the updated settings and length.        
                
           +++++++++++++++++++++USE State+++++++++++++++++++ 
useEffect :- const[example, setExample] = useState("initial value")
Ex:-  const[length, setLength]  = useState(8) //intial paaswd l is 8

              +++++++++++++++++++++USE EFFECT+++++++++++++++++++ 
useEffect : it call the function when we render that item or component

          +++++++++++++++++++++USE CALLBACK+++++++++++++++++++ 
useCallback() => It call the Fn.(inside it) when there is any change in Component's(Fn).'s state. It store the components's state in CACHE and if FN RUN AFTER 1ST TIME IT check previous state of Components (FROM CACHE) and current if both match it doesn't call back the function but if is not MATCH it then call back the fn.

useCallback() is a React hook used to memoize functions. When wrapped around a function, it returns a memoized version of that function. This memoized function will only be re-created IF ONE OF ITS DEPENDENCIES CHANGES. The purpose of useCallback() is to optimize performance by preventing unnecessary re-renders in React components, especially when passing callbacks to child components. It caches the memoized function and reuses it if the dependencies remain unchanged."

So sometimes we see that on rendering the Components Parent Component is changed but child component's state doesn't Change Because it State is Not Change


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 const[numAllowed, setNumAllowed]=useState(false) //true means num is in paasword

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
WHY WE USE CALLBACK HOOK:-

// password generator is method by  which we produce our password , yhi method baar baar run ho rha h like when we include num it again run method and generate paasd included num , so we call method again and again SO WE USE CALLBACK HOOK FOR CALL FN MULIPLE TIMES     CALLBACK = (FN. , DEPENDENCIES(mtlb jiske change hote hi method run kre , give in format of array))
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

At Line 13:-
const passwordRef = useRef(null) //()iske andar default value de skte ho i have no so null

At Line 16:-

let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"   ==>intially paswd sirf abcd se bnega if we have nothing 

From Line 18:-

if(charAllowed) str+= "!@#$%^&*()-[]{}" //char allow means special character
// now we choose random value using loop and math fn.
for (let i = 0; i <length; i++) {
  //we choose random using math.random
  let char = Math.floor(Math.random()*str.length + 1) // +1 isilye add kra ki zero val n ae
  //now ir run 8 time if l=8 and we get outpu which is random index of str store in char
  pass+=str.charAt(char)
}


At Line 31:
const pasdgenerator = useCallback (fn(){

},[length,numAllowed,charAllowed, setPass]) ==> 
length,Num is our dependencies inke change hote hi method run hota h so we pass it in   BUT SETPASS IS A METHOD WHICH ALSO A DEPENDENCIES iske basis par bhi hum chijo ko change krenge


from Line 32:-
const copyPasswordToClipboard = useCallback(()=>{
passwordRef.current?.select();//means we select all text and its seen on UI
//passwordRef.current?.setSelectionRange(0,3);//select only first 3 words

 window.navigator.clipboard.writeText(pass)
 //yha react m sara code window pae execute hota h now in window in navigate i have clipboard otion iside i have write text 
}, [ pass])




