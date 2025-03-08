// import React from 'react';

// const FormUser = () => {
//     return (
//         <div>
//             <div className="flex flex-col gap-2 ">
//                 <Label htmlFor="firstname">Firstname:*</Label>
//                 <Input
//                     id="firstname"
//                     type="text"
//                     placeholder="Enter firstname..."
//                     {...register('firstname')}
//                 />
//                 {errors.firstname && (
//                     <p className="text-red-500 text-sm">{errors.firstname.message}</p>
//                 )}
//             </div>
//             <div className="flex flex-col gap-2 ">
//                 <Label htmlFor="lastname">Lastname:*</Label>
//                 <Input
//                     id="lastname"
//                     type="text"
//                     placeholder="Enter lastname..."
//                     {...register('lastname')}
//                 />
//                 {errors.lastname && (
//                     <p className="text-red-500 text-sm">{errors.lastname.message}</p>
//                 )}
//             </div>
//             <div className="flex flex-col gap-2 ">
//                 <Label htmlFor="email">Email:*</Label>
//                 <Input
//                     id="email"
//                     type="text"
//                     placeholder="Enter email..."
//                     {...register('email')}
//                 />
//                 {errors.email && (
//                     <p className="text-red-500 text-sm">{errors.email.message}</p>
//                 )}
//             </div>
//             <div className="flex flex-col gap-2 ">
//                 <Label htmlFor="address">Address:</Label>
//                 <Input
//                     id="address"
//                     type="text"
//                     placeholder="Enter address..."
//                     {...register('address')}
//                 />
//                 {errors.address && (
//                     <p className="text-red-500 text-sm">{errors.address?.message}</p>
//                 )}
//             </div>
//             <div className="flex flex-col gap-2 ">
//                 <Label htmlFor="phone">Phone:</Label>
//                 <Input
//                     id="phone"
//                     type="text"
//                     placeholder="Enter phone..."
//                     {...register('phone')}
//                 />
//                 {errors.phone && (
//                     <p className="text-red-500 text-sm">{errors.phone.message}</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FormUser;
