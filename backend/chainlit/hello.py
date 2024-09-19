# This is a simple example of a chainlit app.
import chainlit as cl
from chainlit import AskUserMessage, Message, on_chat_start


@on_chat_start
async def main():
    res = await AskUserMessage(content="What is your name?", timeout=30).send()
    if res:
        await Message(
            content=f"Your name is: {res['output']}.\nChainlit installation is working!\nYou can now start building your own chainlit apps!",
        ).send()


# @cl.password_auth_callback
# def auth_callback(username: str, password: str):
#     # Fetch the user matching username from your database
#     # and compare the hashed password with the value stored in the database
#     if (username, password) == ("admin", "admin"):
#         return cl.User(
#             identifier="admin", metadata={"role": "admin", "provider": "credentials"}
#         )
#     else:
#         return None
#
@cl.wallet_auth_callback
def auth_callback(address: str, ens_name: str):
    return cl.User(
        identifier=address,
        display_name=ens_name or beautify_address(address),
        metadata={"role": "admin", "provider": "wallet"},
    )


def beautify_address(address: str):
    return address[:6] + "..." + address[-4:]
