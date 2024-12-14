import React, { useState } from 'react';

const Companies = ({ companies, setCompanies }) => {
  const [newCompany, setNewCompany] = useState({ name: '', logo: '' });
  const [vacancies, setVacancies] = useState({});

  const handleAddCompany = () => {
    if (!newCompany.name) return alert('Company name is required!');
    const newCompanyId = companies.length + 1;

    const defaultVacancy = {
      id: 1,
      title: 'Example Vacancy',
      description: 'Description for the example vacancy.',
      logo: '',
    };

    setCompanies([...companies, { ...newCompany, id: newCompanyId }]);
    setVacancies({
      ...vacancies,
      [newCompanyId]: [defaultVacancy],
    });
    setNewCompany({ name: '', logo: '' });
  };

  const handleAddVacancy = (companyId, title, description, logo) => {
    if (!title || !description) return alert('Title and description are required!');
    const companyVacancies = vacancies[companyId] || [];
    setVacancies({
      ...vacancies,
      [companyId]: [
        ...companyVacancies,
        { id: companyVacancies.length + 1, title, description, logo },
      ],
    });
  };

  return (
    <div className="container mx-auto p-6 flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        Companies and Vacancies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map(({ id, name, logo }) => (
          <div
            key={id}
            className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center mb-4">
              {logo ? (
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-24 h-24 object-cover rounded-full shadow-md"
                />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full">
                  <span className="text-gray-500 font-medium">No Logo</span>
                </div>
              )}
              <h3 className="text-xl font-semibold mt-4 text-gray-700">{name}</h3>
            </div>

            <AddVacancyForm companyId={id} onAddVacancy={handleAddVacancy} />

            <h4 className="mt-6 text-lg font-semibold text-gray-800">Vacancies</h4>
            <ul className="space-y-3 mt-2">
              {(vacancies[id] || []).map(({ id: vacancyId, title, description, logo }) => (
                <li
                  key={vacancyId}
                  className="bg-gray-100 p-4 rounded-md shadow-md hover:bg-gray-200 transition"
                >
                  <strong className="block text-gray-800">{title}</strong>
                  <p className="text-sm text-gray-600">{description}</p>
                  {logo && (
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      className="w-16 h-16 mt-2 rounded object-cover"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full max-w-md mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-6 text-gray-800">Add a New Company</h3>
        <input
          type="text"
          placeholder="Company Name"
          value={newCompany.name}
          onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setNewCompany({ ...newCompany, logo: reader.result });
              };
              reader.readAsDataURL(file);
            }
          }}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <button
          onClick={handleAddCompany}
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add Company
        </button>
      </div>
    </div>
  );
};

const AddVacancyForm = ({ companyId, onAddVacancy }) => {
  const [vacancy, setVacancy] = useState({ title: '', description: '', logo: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVacancy(companyId, vacancy.title, vacancy.description, vacancy.logo);
    setVacancy({ title: '', description: '', logo: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input
        type="text"
        placeholder="Job Title"
        value={vacancy.title}
        onChange={(e) => setVacancy({ ...vacancy, title: e.target.value })}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <textarea
        placeholder="Job Description"
        value={vacancy.description}
        onChange={(e) => setVacancy({ ...vacancy, description: e.target.value })}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setVacancy({ ...vacancy, logo: reader.result });
            };
            reader.readAsDataURL(file);
          }
        }}
        className="w-full p-2 border rounded-lg"
      />
      <button
        type="submit"
        className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Add Vacancy
      </button>
    </form>
  );
};

export default Companies;
