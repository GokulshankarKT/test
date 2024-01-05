var h2=document.querySelector('h2');
var num=Number(h2.innerHTML);

function inc(){
  num+=1;
  h2.innerHTML=num;
  const ul=document.querySelector('ul');
  const li=document.createElement('li');
  li.setAttribute('count',num);
  li.innerHTML=num;
  ul.appendChild(li);

}
function dec(){
  const rem=document.querySelector('[count="'+num+'"]');
  const r=parseInt(rem.getAttribute('count',10));
  if(r%2==0){
    num-=1;
    return;
  }
  rem.remove();
  num-=1;
  h2.innerHTML=num;
}