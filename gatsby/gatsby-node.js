const createPosts = require(`./nodes/createPosts`)
const createPages = require(`./nodes/createPages`)
const createUsers = require(`./nodes/createUsers`)
const createCategories = require(`./nodes/createCategories`)
const createTags = require(`./nodes/createTags`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createUsers({ actions, graphql })
  await createCategories({ actions, graphql })
  await createTags({ actions, graphql })
}