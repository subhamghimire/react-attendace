function Card({ person, updateUser }) {
  return (
    <div onClick={() => updateUser(person, !person.active)}>
      <div
        className="h-24 sm:w-full rounded flex flex-row p-1 cursor-pointer"
        style={
          person.active
            ? { backgroundColor: "#266AE5" }
            : { backgroundColor: "white" }
        }
      >
        <div className="w-20 text-center mr-4 my-auto">
          <div className="">
            <img
              className="object-contain rounded-full"
              src={person.image}
              alt=""
            />
          </div>
        </div>
        <div className=" border-l border-grey-grey border-opacity-20 p-2 flex flex-col leading-normal">
          <div
            className=" font-semibold text-md justify-center m-auto"
            style={
              person.active
                ? { color: "white" }
                : { backgroundColor: "text-gray-900" }
            }
          >
            {person.name}
          </div>
          <div
            className="text-base "
            style={person.active ? { color: "white" } : { color: "#6EC947" }}
          >
            {person.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
