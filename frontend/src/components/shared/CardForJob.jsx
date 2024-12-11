import React from "react";
import { Button } from "../ui/button.jsx";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar.jsx";
import { Badge } from "../ui/badge.jsx";
import { useNavigate } from "react-router-dom";

const CardForJob = ({job}) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDiff = currentTime - createdAt;
    return Math.floor(timeDiff / (1000*24*60*60));
  }  
  return (
    <div className="p-5 rounded-[10px] shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{daysAgoFunction(job?.createdAt) == 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRUVFRUXFxcXGBcYFxcVFxUXFxcXFRceHiggGh0lHRcVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NGA8PFyslFh81LS0xKystLSsrKy4tLSstLTUrLS03LS0tKy0tKy0rLS0rKy0tLTIrLS0tKy0rKystK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAADAQADAQEAAAAAAAAAAAAAAQIDBAUHBgj/xABEEAABBAAEAwUFBQMKBgMAAAABAAIDEQQSIfAFMUEGEyJRYQcyUnGSFIGRodEjQnIIM3OCorGyweHxYmSDk6PSFTRE/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAgEQEBAQEAAgEFAQAAAAAAAAAAAQIRAyETEjFBUWEi/9oADAMBAAIRAxEAPwD1QjewlveiZCkhVDO90goRSA3vRLe9E6RSACdb2EUmgVb2Ei1XSdIM8ieRXSdIIyIyrTKikEZfRLKtMqC1Bnl3sIyq6SpBGVGVVSVIFW9hFJoKBUit7CR3okgqkVvYUlCCt70Rpv8A2U0mgMnp+SaK3sIQCE971QSgEFCN71QARSL3soCAATpMKggQCYanaLQOkUgFUgVJEq1JCCbQnSeVQRaS0ypFqozIQAtKQQgypJaEKSEGdIpWUt71QJNFo3vVAk0JXvZQO96oSveyhAXvZRaRRSB2mkFVICt7KQC0ATAQSAmArAVAIIyphqsBVSggNVAKkUgSFVIpBKKVUikEEJUrpFIM0lpSzKBUpIVKSVRJCkqipIQK97KN71SITpAJEp0ikE367/FCeVCB0je9EHe6RveiAAVAb2EgrAQMDewqASVBAwFQapCoFQMBOkwE6QSUBNwSARVJWjKmGIJtK1eRPKghqdKqRSCCFDmrWkqRGWRSWrUhIhBkWpFqshIhUZFqkhaOCghBNJ0it7CSB/d+f+iSe96JIHvoivkhMIEFYQArAQIBUAmArCgkNVhqaoIAJoTARRSYCaEGWInbGx0kjg1jGlznHQNa0WST5AarwPtl7VsXiJHMwb3YeAEgFtCWQfE53NnoG0R1J6fbe3fjRiwceGaaOJec39FFTnD73Oi+YsLwZejxYnO0fa9lvadj8JIO9lfiYb8TJXZn1fNkp8QcOlkj06j9B8I4nFioWYiFwdHI3M0/kQR0IIII6EEL8nYXBSy33UUklc8jHPr55QaXrHsE405r8RgH2BXfxg2C1wIZK2jyu4zXo5PLic7B7JSRCpIlecSlSbipLkAVKoFJEQVmStisnBBNqHFUQkWqjMlJURvZSpAkJ0hAwqCVqggoKwpCoIKCoJBUoGFQWQVAorQJqAVnisQ2NjpJHBjGNLnOOga1osk/IIORakzNDg0uAc73QSAToToL10B/BeDdr/aziJ3OjwmaGHUBwNSv5jM482DkQG0dNTrQ+j9guBEpxOOk8UmZsLXOJc4Cu8eS46knMwfJvqtL47M9o6H+UBiCcfBF0Zhg7+tJLID+UbV13sn7DN4hK6bEf/VgIDhZHeyUHd3fRoBBceerR1JHJ9vunE2n/lIj/wCSZerdluybG8GZgZMze+w570tIDg+YZn0eWhdWvRoWl19PjnB2Z49w3DtEIxODhDBTYxLEwNA6Bliguvfx3g75m4g4vBd8wFol76Jr8rgQWudm8Q56Gxeo1XwPEPYS8AnDYxp00bLHlv0L2O+X7i+C7S9g+IYEF08BMY5yxHvIx6uI8TB6uAXMxi/bQ/S2Dx0UwuGWOQecb2vH4tK3yr8es0Ic3Qg2CNCD5gjUFfc9k/ahjsI5rZXuxMHVkhuQDzjlPiv0dY0rTmrrw38D9E5Ui1cbgvFYsXAzEQOzRyCweo1otcOjgQQR5hcxYCKSKopFBBUuVlSURBUlUVJVGZUlW5SUCo+X96EkIBUEg1WAgYWjVIHpv8FYQWFQUgKgoFlVgICYRTAXn/tzkkbwyme66eJsv9H4nC/+o2JegricY4XFioJMPM3NHI3K4dfMEeRBAIPQgFdZvLKPyMvS/Yj2sjwk8mFncGxYgtLHE01szdAD5B4IF9Cxvmvnu2fYLF8Oc4uYZYLOWdgtuXp3oH82fnp5Er5TmvXebyPcva32KxON4hhJIYnPicxkMrgWgRtbK5xLrIIGWR/4L1xfmfsp7UMfgQI8wxEIoCOWy5oHRkg8Q6aHMABoAvReGe2/BPoTwTwnqW5ZWD7wQ4/SsNY36n6Hqa834V7QJZuOS8OIiOHBkjYQDn7yJmZ+Z10dWyiq6D1v7Dh/abCz4Q42KS4Gtkc5xBaQI7z21wBBFFfn72ZY10vHMPM73pZsQ938UkMznfm4rnGey9Hee2fsNHgyzGYVoZDK/JJG0U2OQglrmD91rqcK5AgV71Dy9foj26YxreG91zfNNEGAanwOD3O+QAAvzcPNeLdlux+Mx7w2CMhl+KVwIiZ52794/wDCLPy5rbx6/wA9o9M/k9zSGHFsP802SJzP6RzHCQD7mxH716yV1HZTs7Fw/DNw0OoFue8inSSGsz3epoADoAB0Xbrz7vdWiHFSSh4U0uQyoJTypZURBKglaFqktQQVJVlQQqD7ikivTf4IQMKwoCoINAqCkJAqDYJhZhyoOQaBUFkCmLRWoVLMBaBA10HEuxfDpyXSYOAuPNwYGOPzc2iV3ydKy2D4Y+yzg7jlEBDgLyieW8pJonxk1YIs+RWsXsn4QP8A8rnfxTT/ANweF0Xtxws0ceHx+He+N0DnRvdG4tcGy5S0kjpmZl9e8C8uxnb/AIpKzu342bKeeXKwn+uxod+a1znWp2Uff+1PtJhcLh//AIjBNa1t/tmx6NY283dEg+851F3PSwfeXyvsjAfxbDBjKDe+c49cohkAv+s5i+FAXrP8n/hBdPiMWR4Y4xC09C95D316hrGf9xaWTOKPXOI8Bw2Ie2SeFkrmCm94M4aLzaNNtBsDWr0HkFz44w0AAAAaAAUB8grSXlAkmkgkqaVFSUCUlMpFEQVJTJUkqiXKCqcVBKBb3ohLN89/ehBQKsKLVBBoEUkCqBQU0KwFIKoFQUAqUhdL2m7UQ4DuXYhsndzSCLvGhpZG48jKS4ECsxsA6Md6XZOq74Jrom9p4Tjzw5rZHzNj7yRzQ0xxNqwJHF1gm2aBp/nG+td7ScDTSWWMxLImOllcGMY0uc52ga0CySoM+KcPjxEMkEzc0cjS1w9D5HoRzB6EBfmrtr2HxXDpHZmukgs5J2tJaW9BJXuO9Doelr2CH2ucPc8BzcSyJzsrcQ+KoCf4s2b+zprdL79pvUcvMLTOtYH5T7L9lcXxB4Zh4yWk+KVwIiYOpc/kT/wiyfJfpbstwCLAYaPDRahgtzjoXvOrnu9SenQUOi7dS8JvyXQaSgEov5rMUkSp1SIKBkqbSpAQBUlMqSURm9SVZ3u1JCozcoK0KklBNb2U1SSAtMKSU7QaBWCsQVeZBqFQWbSrCgsFdT2q4XHi8JNh5R4Xsdr1a5via4eocAfupdqFJbao8O4WJouAyY2J8nfYrENGJmaSZWYaNzo/AbvQgdeTz0C3iDY5MXBwmfETYV3Dpny5y+mT5SWuYSGkPPhuh+87ypvtMUDWjK1oDdfCAANeenJGFwccYIjYxgJshjQ0E+dAc138n8V5Pw/jjJ5ez8cWIzOiaRiGhzrzGOIAP+I21566a9Qum4Z2XmxXCMTiG4ieaTVjIsxcwRNmhmfTdS6S2Xof3QKJpe3wcOhYbZFE03m8LGg5jzdYHPQareCBrBTGho500BovzoJ8nPtB5/gPabwn7Ph42lzj+xY3Dshe5zHDKG0KynKaIykk14bOi+O7UYuF+J4m/iOKxEGKw7nfYI2uexoYAe5cwAHV/gzat0cTY1LfbWcPhbIZRFGJDzkDGh5+b6sqsRgonua98Ub3M91zmNc5v8JIsfck1JfUHjowUvEMbhocc+ZpdwZssrWvdGXSB7wDI0aWba4gjmB8l1vZuJ0cPB+ICacz4jHNw0hdI5zTB3pj7vKT7oa3l6n0r3gwtLs5a3NVZqGavK+deihuEjAaBGymnM0ZW0087aK0PqE+v1wfn6XF4R0XEX4nGzsxcOJmOEY17wBTjkLKHMuBa42Ka0cl3OPxQmxcDOOTzYeMcPglioujDsQWtMj3ZR4ZA7PpXNoGmjT6T2Y7HxYQS5yyd0mKlxLXOiaDEZAwZWklx0y+8Ku+S7zFYSOWu8jZJlNtzta6nebbGh9Qrdzo8C4PO+bCYRn2ictl453Xed44SmJ8eHF5rsGjfoSu2m4JI13F8HhJZgMGcNicMM7nOa/IZJGt6nM1zhXUtZdkL2cYSMV+zZo7MPC3R+niGnvaDXnouv4/wg4iGSOKU4aSXKHTRtHeZQRmF2DZbbbvS7T5PaPkfZpjZMficXxN+ZrH91BDGXHK3LGx0xAutXZNeervkvQV13Z7gsWCw8eGhByRg6k25xJLnOcfMkk+XQUAuwJXGr2+gFQSmSpJXIRUEqiVm4qhFJBKAgPv/NCL3f8AokgVem/wRSqt7CSBgKwFCoINAqCgKggsKlmCqBUGiagJoKTU2miqQoJSDkGloUZki5BaVqMySC7QoCaIazeVRKhyCSVJKqlJVElQVZUlBNb2EwE63sJb3ogdbpJF72EIGhK00AmlveqEFByoOWSYQbByeZZhUEFZ1QcoAVBQaAp2oBTtBRU0i07QFIr5ItFoBCVpWgdpEpEpWgLSJRaklAEqSUEqSVQEpWhSSgaFIKdoHaEr+X4oQVveqL3sopCAQhCBJgo/FCCgVQcsHzNbWZwGY0LIFmiaHnoCkMUy6ztuiazDkDlJryvT5oOVadrjmdoIGYWTQ1Gp10Hr4Xaeh8kfbIxXjaLoDxDUurKBrrdivmEHItO1i2ZpNBwJIur1rz+XLVL7Uz42/iOma/8AA/6T5FByLRax74XVj8ddKJ/xN/EeYUtxLSaD2k0DVjk73T8j080HItFrAYtlZu8bWbLeYVnust/Felc7SGKjNDvGElxaPELLm+80eZHUc0G5cpzKDK3xajw+9r7ugd4vLQg69CCsTi46zd4ysua8wrKeTruq9UHIzJF6xkxDGkBz2guBLQSASGi3FovUAak9ApdiWDQvaCSGjxC8xLmhoHnbXivNpHQoNi5SXKDM2yMzbBaCLFgu90HyJ6DqkJmkhuYWQSBYsgGrA8r6oLtPe9UBOkEoO92nR9UIJreynW9lNFIFXzQnSSCPs7PgZ9I/RH2dnwM+lv6JplBH2dnwM+lv6J9wz4GfSP0T3vRBG9hBHcM+Bn0t/RWyNo5NaPkAP8k0wgymwzXuY5wNsJLSCRRIo/kVxouDQsZka1zWhgYAHvoNaSWgC+YugeYGl6Bc9JBxBw6O81Gw8PBzO0cC53nytzyRyOY6arOLg8DaysrL3VeJ3OFhZHzOtN09a9AufQ3/ALIpBhh8GxhBa2i1oYCSSQwGw2z0tceLgkAaGhrqDHsrvJPdeQ5wvNfMHXmMzgKzG+w3vRO0HCHCoqqnAZXMPjfZa6OOMgm7vLEzXnbb5m0o+DwjkHAgMaDnfYEbmuYLu9Cxv4V1N85AQYRYCJrWtDdGvL2iyacc2v8AaKzi4VC0tIb7pttucaoNAAs8gGNAHIUuZe9hSg444dF+18J/bfznieb0I018OhrSuQ8guPJwPDklxj8RYWF2Z1uaZDIbN6+NznWerj5ldikgwnwUbgQ5ujmvaaJFh7Q11/MDmuM3geHDzI2MBxlExIJFyjvfER1P7aT6h5CuwCW96IOFiOEwvcXuDsxfG8kPePHG0tYaBrQH76F8hWkHD42ODmg2GlupcfCXF1a9LK5N72EXvYQJzAeYB+Yv+8Kfs7PgZ9Lf0V73oi97CDP7Oz4GfS39E/s7Pgb9I/RVe9hMb3SCPs7PgZ9I/RL7Oz4GfS39Foit7CCPszPgZ9Lf/VCtCBOQ1CEAEBNCChzSahCACZQhAIKSEAUJIQMc0v0/zQhAwmkhAnp7/JCEAUHkUIQQFQQhBKaaEElUhCCkdPxSQgpCEIP/2Q==" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-xl my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
          {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"}>{job?.position} Positions</Badge>
        <Badge className={"text-[#F83002] font-bold"}>{job?.jobType}</Badge>
        <Badge className={"text-[#ad38c2] font-bold"}>{job?.salary}LPA</Badge>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
        <Button
          className="bg-[#ad38c2] hover:bg-[#882599] text-white hover:text-white"
          variant="outline"
        >
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default CardForJob;
