
import { useEffect } from "react";

// setIndex,index,tab,

function NavBar ({Setindex,pokindex,tab}){
    useEffect(
        () => {
          alert(tab[pokindex].sound);
        },
        [tab[pokindex].sound],[]
      );

    return(
        <div><button onClick={() => Setindex((pokindex <=0 ? tab.length - 1 : pokindex - 1))}>precedent</button>
        {/* marche pas  */}
        <button onClick={() => Setindex((pokindex >= tab.length -1 ? 0 : pokindex + 1))}>suivant</button></div>
        
    )

}

export  default NavBar;