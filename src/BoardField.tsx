

export default function BoardField ({positionName, positionX, positionY, contains, selectedPiece, setSelectedPiece, piecesPosition, setPiecesPosition}:
    {
        positionName: string,
        positionX:number,
        positionY:number, 
        contains:string|null
        selectedPiece: any,
        setSelectedPiece: any
        piecesPosition: any,
        setPiecesPosition: any
    }) {


    const handleClick = () => {

        if (contains === null && selectedPiece.isSelected === false) {
            return 
        }

        if (contains !== null) {
            setSelectedPiece({
                isSelected: true,
                positionName: positionName,
                positionX: positionX,
                positionY: positionY,
                figure: contains,
                movement: {x: null, y: 1}
            })
            return
        }

        if (selectedPiece.isSelected === true && selectedPiece.positionX !== positionX || setSelectedPiece.positionY !== positionY) {
            
            setPiecesPosition((piecesPosition:any) => 

                piecesPosition
                    .map((piece:any) => piece.positionX === selectedPiece.positionX && piece.positionY === selectedPiece.positionY
                        ? {...piece, chessPiece: ""}
                        : piece
                    ).map((piece:any) => piece.positionX === positionX && piece.positionY === positionY
                        ? {...piece, chessPiece: selectedPiece.figure} 
                        : piece
                    )
            )
        
            setSelectedPiece({
                isSelected: true,
                positionName: null,
                positionX: null,
                positionY: null,
                figure: null
            })
        }
    }

    return (
        <div 
            className={
                `w-16 h-16 border flex justify-center items-center group
                ${contains !== null ? "hover:cursor-pointer" : null}    
                ${selectedPiece.positionX === positionX && selectedPiece.positionY === positionY ? "bg-red-700" : null}
                
                `}
                // ${selectedPiece.positionX + selectedPiece.movement.x === positionX ? "bg-green-700" : null}
                // ${selectedPiece.positionY + selectedPiece.movement.y === positionY ? "bg-green-700" : null}

            onClick={handleClick}    
        >
            {
                contains !== null
                ? <img src={"/chess-figures/"+contains+".svg"} alt={contains} />
                : <p className="hidden text-white group-hover:block">x:{positionX} y:{positionY}</p>  
            }
        </div>
    )
}