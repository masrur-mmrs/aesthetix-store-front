

export default function Loading() {
  return (
    // <div className="bg-gray-100 w-full min-h-screen flex justify-center items-center">
    // <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
    //   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-gray-900 to-gray-500 animate-spin">
    //     <div className="h-9 w-9 rounded-full bg-gray-100"></div>
    //   </div>
    // </div>
    // </div>
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
      </div>
    </div>
  )
}
