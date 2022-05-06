
function House ({onAction}) {
    return (
        <>
        <button type="button" onClick= {onAction}>
            kitchen
        </button>
        <button type="button" onClick= {onAction}>
        bathroom
       </button>
       <button type="button" onClick= {onAction}>
       livingRoom
      </button>
      <button type="button" onClick= {onAction}>
      bedroom
      </button>
      
      </>
    );
}