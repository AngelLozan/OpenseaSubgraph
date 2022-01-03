import {
  OrderApprovedPartOne as OrderApprovedPartOneEvent,
  OrderApprovedPartTwo as OrderApprovedPartTwoEvent,
  OrderCancelled as OrderCancelledEvent,
  OrdersMatched as OrdersMatchedEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  WyvernExchange as TokenContract,

} from "../generated/WyvernExchange/WyvernExchange"
import {
  OrderApprovedPartOne,
  OrderApprovedPartTwo,
  OrderCancelled,
  OrdersMatched,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/schema"

export function handleOrderApprovedPartOne(
  event: OrderApprovedPartOneEvent
): void {
  let entity = new OrderApprovedPartOne(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.hash = event.params.hash
  entity.exchange = event.params.exchange
  entity.maker = event.params.maker
  entity.taker = event.params.taker
  entity.makerRelayerFee = event.params.makerRelayerFee
  entity.takerRelayerFee = event.params.takerRelayerFee
  entity.makerProtocolFee = event.params.makerProtocolFee
  entity.takerProtocolFee = event.params.takerProtocolFee
  entity.feeRecipient = event.params.feeRecipient
  entity.feeMethod = event.params.feeMethod
  entity.side = event.params.side
  entity.saleKind = event.params.saleKind
  entity.target = event.params.target
  entity.save()
}

export function handleOrderApprovedPartTwo(
  event: OrderApprovedPartTwoEvent
): void {
  let entity = new OrderApprovedPartTwo(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.hash = event.params.hash
  entity.howToCall = event.params.howToCall
  entity.calldata = event.params.calldata
  entity.replacementPattern = event.params.replacementPattern
  entity.staticTarget = event.params.staticTarget
  entity.staticExtradata = event.params.staticExtradata
  entity.paymentToken = event.params.paymentToken
  entity.basePrice = event.params.basePrice
  entity.extra = event.params.extra
  entity.listingTime = event.params.listingTime
  entity.expirationTime = event.params.expirationTime
  entity.salt = event.params.salt
  entity.orderbookInclusionDesired = event.params.orderbookInclusionDesired
  entity.save()
}

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.hash = event.params.hash
  entity.save()
}

export function handleOrdersMatched(event: OrdersMatchedEvent): void {
  let entity = new OrdersMatched(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.buyHash = event.params.buyHash
  entity.sellHash = event.params.sellHash
  entity.maker = event.params.maker
  entity.taker = event.params.taker
  entity.price = event.params.price
  entity.metadata = event.params.metadata
  entity.save()
}

export function handleOwnershipRenounced(event: OwnershipRenouncedEvent): void {
  let entity = new OwnershipRenounced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}


