import { Request, Response } from "express";
import User from "../model/User"

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({})
    if (!users.length) {
      return res.status(404).json({ msg: "No such user found" })
    }

    return res.status(200).json({ users });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: "Something went wrong" })
  }
};

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body)
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ msg: "Validation not accepted" })
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id: userID } = req.params

  try {
    const user = await User.findOneAndDelete({ _id: userID })
    return res.status(200).json({ user: user })
  } catch (error) {
    return res.status(500).json({ msg: `There's no user with id: ${userID}` })
  }
};

export const getSingleUser = async (req: Request, res: Response) => {
  const { id: userID } = req.params

  try {
    const user = await User.findOne({ _id: userID })
    return res.status(200).json({ user: user })
  } catch (error) {
    return res.status(500).json({ msg: `There's no user with id: ${userID}` })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const { id: userID } = req.params

  try {
    const user = await User.findOneAndUpdate({ _id: userID }, req.body, {
      new: true,
      runValidators: true,
    })
    
    return res.status(200).json({ user: user })
  } catch (error) {
    return res.status(500).json({ msg: `There's no user with id: ${userID}` })
  }
}