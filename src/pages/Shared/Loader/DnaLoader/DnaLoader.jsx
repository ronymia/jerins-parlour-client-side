import { Dna } from 'react-loader-spinner';

export default function DnaLoader() {
     return (
          <div className="w-full h-full flex items-center justify-center">
               <Dna
                    visible={true}
                    height="400"
                    width="400"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
               />
          </div>
     )
}
