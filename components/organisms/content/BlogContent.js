import React from "react";

const BlogContent = () => {
  return (
    <div className="relative isolate bg-white  px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-y-4">
        <div className="w-full bg-logoOne h-[300px] rounded-xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1591684080176-bb2b73f9ec68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="isolation des combles"
            className="object-cover pointer-events-none w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
          <div className="absolute bottom-10 left-10 text-2xl lg:text-4xl">
            <a href="#" className="text-white">
              <h3 className="text-white">
                Isoler son logement,
                <br /> comment trouver la
                <br /> bonne entrepise ?
              </h3>
              <a href="#" className="text-sm font-normal leading-6 text-white">
                En savoir plus <span aria-hidden="true">→</span>
              </a>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
          <div className="bg-logoOne rounded-xl relative overflow-hidden max-h-[250px]">
            <img
              src="https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="isolation des combles"
              className="object-cover pointer-events-none w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
            <div className="absolute bottom-10 left-10 text-xl lg:text-2xl">
              <a href="#" className="text-white">
                <h3 className="text-white">
                  Choisir les finitions idéales travaux
                  <br /> pour son logement après les
                  <br /> travaux
                </h3>
                <a
                  href="#"
                  className="text-sm font-normal leading-6 text-white"
                >
                  En savoir plus <span aria-hidden="true">→</span>
                </a>
              </a>
            </div>
          </div>
          <div className="bg-logoOne rounded-xl relative overflow-hidden max-h-[250px]">
            <img
              src="https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="maison bois"
              className="object-cover pointer-events-none w-full object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
            <div className="absolute bottom-10 left-10 text-xl lg:text-2xl">
              <a href="#" className="text-white">
                <h3 className="text-white">
                  Les différents type de charpente,
                  <br /> lequel choisir pour
                  <br /> votre projet ?
                </h3>
                <a
                  href="#"
                  className="text-sm font-normal leading-6 text-white"
                >
                  En savoir plus <span aria-hidden="true">→</span>
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
