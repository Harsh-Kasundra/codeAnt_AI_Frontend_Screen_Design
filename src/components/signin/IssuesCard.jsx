import React from "react";

export function IssuesCard() {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-custom absolute -bottom-4 -right-5 w-64">
      <div className="flex items-start justify-between mb-2">
        <div className="flex flex-col items-start justify-center pl-4">
          <div className="w-[56px] h-[56px] bg-[#9D90FA40] rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <path
                d="M24.4336 14.755H14.6555V4.84301C14.6555 4.72105 14.5571 4.62127 14.4368 4.62127H13.7258C12.2911 4.61978 10.8701 4.90549 9.54453 5.46201C8.21895 6.01853 7.01482 6.83489 6.00122 7.86427C5.00327 8.87275 4.2083 10.0683 3.6606 11.3844C3.09185 12.7509 2.802 14.2006 2.802 15.6974C2.802 17.1941 3.09185 18.641 3.6606 20.0075C4.21021 21.3241 4.99771 22.5104 6.00122 23.5277C7.00474 24.5449 8.17231 25.3432 9.47388 25.9003C10.8196 26.4791 12.2668 26.776 13.7286 26.7735C15.1633 26.7749 16.5843 26.4892 17.9099 25.9327C19.2354 25.3762 20.4396 24.5598 21.4532 23.5305C22.4567 22.5132 23.2442 21.3297 23.7938 20.0103C24.3647 18.6462 24.6577 17.1792 24.6551 15.6974V14.9767C24.6524 14.8547 24.554 14.755 24.4336 14.755ZM26.8372 13.2166L26.7661 12.435C26.5336 9.88491 25.418 7.47899 23.6188 5.66346C21.8213 3.84285 19.4525 2.7163 16.9223 2.47867L16.1485 2.4066C16.02 2.39552 15.9106 2.4953 15.9106 2.62558V13.261C15.9106 13.3829 16.009 13.4827 16.1293 13.4827L26.6184 13.455C26.7469 13.4522 26.8481 13.3441 26.8372 13.2166Z"
                fill="#9D90FA"
              />
            </svg>
          </div>
          <h3 className="font-bold text-[#171717] text-sm mt-4">
            Issues Fixed
          </h3>
          <p className="text-3xl font-bold text-[#081735]">500K+</p>
        </div>
        <div className="flex flex-col items-start gap-1 text-blue-600 pr-4 pt-3">
          <div className="flex items-start justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M8.83325 10.657L12.8333 6.65698L16.8333 10.657"
                stroke="#0049C6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.8333 6.65698L12.8333 16.9861"
                stroke="#0049C6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-bold">14%</span>
          </div>
          <span className="text-[#171717] text-xs font-normal">This week</span>
        </div>
      </div>
    </div>
  );
}
