import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import SubjectItem from "../components/Subjects/SubjectItem";
import { getSubjects, subjectWithCreator } from "../services/services";
import { useEffect, useState } from "react";
import Button from "../components/FormElements/Button";
const Subjects = () => {
  const [subjects, setSubjects] = useState<subjectWithCreator[]>(getSubjects());
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const query = new URLSearchParams(location.search).get("predmet");

    setSubjects(() => {
      const allSubjects = getSubjects();
      if (query) {
        return (
          allSubjects.filter((subject) => subject.predmet === query) ||
          allSubjects
        );
      }

      return allSubjects;
    });
  }, [location]);

  return (
    <>
      <div className="subjects-container">
        <Navigation />

        {subjects.reverse().map((subject, index) => {
          return (
            <SubjectItem
              cena={subject.cena}
              creatorId={subject.creatorId}
              grad={subject.grad}
              opis={subject.opis}
              predmet={subject.predmet}
              vremeTrajanja={subject.vremeTrajanja}
              key={index}
              creatorData={subject.creatorData}
            />
          );
        })}
        {subjects.length === 0 && (
          <div className="no-subjects">
            <h4>Ne postoji ni jedan oglas za ovaj predmet.</h4>
            <Button
              onClick={() => {
                navigate("/casovi");
              }}
            >
              Pretraži sve časove
            </Button>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Subjects;
