/*
    * This file is used to optimize imports,
    * so that we only add references to a single file
    * when we want to import more than 1 file from the "Routes" folder.
*/
import AuthRoutes from './AuthRoutes';
import ProfessorRoutes from './ProfessorRoutes';
import StudentRoutes from './StudentRoutes';
import KardexRoutes from './KardexRoutes';

export {
    AuthRoutes,
    ProfessorRoutes,
    StudentRoutes,
    KardexRoutes
}
