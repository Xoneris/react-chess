import { useState } from "react"
import pieces from "./pieces.json"
import BoardField from "./BoardField"

export default function App() {

const [piecesPosition, setPiecesPosition] = useState(pieces)

const [selectedPiece, setSelectedPiece] = useState({
  "isSelected" : false,
  "positionName" : null,
  "positionX" : null,
  "positionY" : null,
  "figure": null,
  "movement": {"x":0,"y":0}
})

const [selectedPlayer, setSelectedPlayer] = useState("white")

  return (
      <main className="bg-gray-800 w-screen h-screen flex flex-col justify-center items-center">
        
        <div className="border w-[514px] h-[514px] flex flex-wrap-reverse">
        {
          piecesPosition.map((piece,index) => (
            <BoardField 
              key={index}
              positionName={piece.positionName}
              positionX={piece.positionX}
              positionY={piece.positionY}
              contains={piece.chessPiece !== "" ? piece.chessPiece : null}
              selectedPiece={selectedPiece}
              setSelectedPiece={setSelectedPiece}
              piecesPosition={piecesPosition}
              setPiecesPosition={setPiecesPosition}
            />
          ))
        }
      </div>

      <p>{selectedPiece.figure} - {selectedPiece.positionX}{selectedPiece.positionY}</p>
      <button onClick={() => setPiecesPosition(pieces)}>Reset</button>

    </main>
  )
}

