import { useTranslation } from "react-i18next";
import ShowCourse from "../components/ShowCourse";
import { useState } from "react";
import { Button } from "react-bootstrap";
import List from "../components/Example";

export default function About() {
    const { t } = useTranslation();
    const [show, setShow] = useState(true)

    return (
        <div>
            <h2>{t('aboutTitle')}</h2>
            <Button variant="primary" onClick={() => setShow(!show)}>{show ? 'Hide ' : 'Show '} component</Button >
            {show && <ShowCourse />}
            <hr/>

            <List />
        </div>
    )
}
